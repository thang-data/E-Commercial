import { storage } from './config';

export const simpleUploadFirebase = (callThis, storageRef, storageChild, uploadFile, fileUrl, callback) => {    
    const uploadTask = storage.ref(storageRef).child(storageChild).put(uploadFile);

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        callThis.setState({ uploadProgress: progress });
    },
    (error) => {
        console.log(error); return;
    },
    () => {
        storage.ref(storageRef).child(storageChild).getDownloadURL().then(downloadUrl => {            
            callThis.setState({ [`${fileUrl}`]: downloadUrl });            
                        
            callback();            
        });
    });
}

export const arrayUploadFirebase = (callThis, storageRef, storageChild, uploadFile, fileUrl, callback) => {
    const count = uploadFile.length;    

    if(count > 0) {
        const urlList = [];

        for(let i = 0; i < count; i++) {            
            const uploadTask = storage.ref(storageRef).child(storageChild + uploadFile[i].name).put(uploadFile[i]);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                
                callThis.setState({ uploadProgress: progress });
            },
            (error) => {
                console.log(error); return;
            },
            () => {
                storage.ref(storageRef).child(storageChild + uploadFile[i].name).getDownloadURL().then(downloadUrl => {
                    const fileType = uploadFile[i].type.split('/')[0];

                    urlList.push({
                        type: fileType,
                        url: downloadUrl
                    });

                    if(urlList.length === count) {                        
                        callThis.setState({ [`${fileUrl}`]: urlList });

                        callback();
                    }
                });                                
            });            
        }
        return;
    }        
}