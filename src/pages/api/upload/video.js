// cloudinary.v2.uploader.upload("dog.mp4", 
//   { resource_type: "video", 
//     public_id: "myfolder/mysubfolder/dog_closeup",
//     chunk_size: 6000000,
//     eager: [
//       { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
//       { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
//     eager_async: true,
//     eager_notification_url: "https://mysite.example.com/notify_endpoint" },
//   function(error, result) {console.log(result, error)});