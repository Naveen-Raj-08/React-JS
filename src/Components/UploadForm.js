import React, {useEffect, useState} from "react";
import storage from "./firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  listAll,
} from "firebase/storage";

export const UploadForm = () => {
  const [File, setFile] = useState(null);
  const [ImageURL, setImageURL] = useState();
  const [FileLoad, setFileLoad] = useState(false);
  const [UploadedURL, setUploadedURL] = useState(null);

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Upload starts...");

    if (
      File.type === "application/pdf" ||
      File.type === "text/csv" ||
      File.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      console.error("Plese check the file type");
    } else {
      setFileLoad(true);
      const storageRef = ref(storage, `/images/${File.name}`);
      const UploadTask = uploadBytesResumable(storageRef, File);
      UploadTask.on(
        "state_changed",
        (snapshot) => {
          // console.log(snapshot);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (Math.round(progress) === 100) {
            setFileLoad(false);
          }
        },
        (err) => {
          console.error(err);
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((url) => {
            console.log(`URL is ${url}`);
            setImageURL(url);
          });
        }
      );
    }
  };

  useEffect(() => {
    const listRef = ref(storage, `/images`);
    listAll(listRef)
      .then((res) => {
        let promises = res.items.map((imageRef) => getDownloadURL(imageRef));
        Promise.all(promises).then((urls) => {
          let imgUrls = {urlsLinks: urls};
          setUploadedURL(imgUrls.urlsLinks);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <form className="row" onSubmit={handleSubmit}>
        <fieldset className="col-md-6">
          <input type="file" onChange={handleFile} />
        </fieldset>
        <div className="col-md-6">
          <button type="submit">Upload</button>
          {FileLoad === true ? (
            <>
              <span className="spinner-border"></span>
              <span>Uploading</span>
            </>
          ) : null}
        </div>
      </form>
    </div>
  );
};
