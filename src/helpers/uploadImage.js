export const uploadImage = async (selectedImg)=>{
    const formData = new FormData();
    formData.append("file", selectedImg);
    formData.append("upload_preset","mern-portfoilo-yt");
    formData.append("api_key", "842327931295791")
    // uplod image 
    const res = await fetch("https://api.cloudinary.com/v1_1/da2cmovwo/image/upload",{
        method: "POST",
        body: formData,
    })

    const data = await res.json();

    if(!data){
        return console.log("Error occur will uploading img");
    }

    const imageData = {
        secureUrl : data.secure_Url,
        publicId: data.public_id,
        deleteToken: data.delete_token,
    }
    return imageData;
};
