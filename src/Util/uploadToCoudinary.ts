export const uploadToCoudinary = async (pics: any) => {
  const cloud_name = 'dha4dzkqs';
  const upload_preset = 'intagram';

  if (pics) {
    const data = new FormData();
    data.append('file', pics);
    data.append('upload_preset', upload_preset);
    data.append('cloud_name', cloud_name);

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dha4dzkqs/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const fileData = await res.json();
    return fileData.url;
  } else {
    console.log('error: pics not found');
  }
};
