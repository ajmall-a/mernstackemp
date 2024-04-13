const mongoose = require('mongoose');

mongoose.connect(process.env.MongoDB_URL).then(()=>{
    console.log('DB is connected');
    
})
.catch(
    (error)=>{
        console.log(error);

    }
)