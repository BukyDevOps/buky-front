import axios from 'axios';
import React, { useState } from 'react'

const ImageUploader = () => {

    const [file, setFile] = useState(false);

    const upload = async () => {

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", 'buky_images');

        let url = "https://res.cloudinary.com/dkdue4xbo/image/upload/v1660424564/assets/NoImage_bt6wan.png"
        try {
            if (file && file !== url) {
                const uploadRes = await axios.post(
                    "https://api.cloudinary.com/v1_1/dkdue4xbo/image/upload",
                    data
                );

                url = uploadRes?.data?.secure_url ?? "https://res.cloudinary.com/dkdue4xbo/image/upload/v1660424564/assets/NoImage_bt6wan.png";
            }
        } catch (err) {
            console.error(err);
        }
        alert(url)
        return url;        
    }

    return (
        <>
            <div>Image Uploader</div>
            <input
                className="form-control"
                type="file"
                accept="image/jpeg, image/png"
                onChange={(e) => setFile(e.target.files[0])} />

            <button
                className='btn btn-primary'
                title="{'[Pomeri Logiku na submit]'}"
                onClick={e => upload()}>Upload</button>
        </>

    )
}

export default ImageUploader