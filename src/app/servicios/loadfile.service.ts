import { Injectable } from '@angular/core';
//import { AngularFireDatabase,
  //       FirebaseListObservable,
    //     FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabase,
            AngularFireList,
          AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/file.modal';

@Injectable({
  providedIn: 'root'
})
export class LoadfileService {

  private basePath: string = '/uploads';
  uploads: AngularFireList<Archivo[]>;

  constructor(public angularFireDatabase: AngularFireDatabase) {
    //console.log("Hola constructor");
   }

  pushUpload(upload: Archivo){
  const storageRef = firebase.storage().ref();
  //console.log("file.name " + upload.file.name);
   const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot)  => {
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes * 100)
    },
    (error) => {
      console.log("el error es: " + error)
    },
    () => {
      //pequeña modificacion sacada de la documentacion de firebase
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        upload.url = downloadURL;
        upload.name = upload.file.name
        this.saveFileData(upload);
      });
      }
    )
  }

  private saveFileData(upload: Archivo){
    this.angularFireDatabase.list(`${this.basePath}/`).push(upload);
  }

  getUploads(){
    this.uploads = this.angularFireDatabase.list(this.basePath);
    return this.uploads;
  }
  deleteUpload(upload: Archivo){
    const itemsRef = this.angularFireDatabase.list(this.basePath);
    itemsRef.snapshotChanges(['child_added']).subscribe(actions => {
      actions.forEach((action:any) => {
        if(action.payload.val().url === upload.url){
          this.deleteFileData(action.key).then(() => {
            this.deleteFileStorage(upload.name);
          }).catch(error => console.log(error));
        }
      })
    })
    /*this.deleteFileData(upload.$key)
      .then(() => {
        this.deleteFileStorage(upload.name);
      })
      .catch(error => console.log(error));*/
  }

  private deleteFileData(key: string){
    return this.angularFireDatabase.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name: string){
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
