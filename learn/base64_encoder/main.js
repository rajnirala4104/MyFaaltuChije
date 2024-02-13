console.log("checking..")
const str = "this is raj nirala"
const encodeIntoBase64 = btoa(str)
const decoding = atob(encodeIntoBase64)

// console.log(encodeIntoBase64)
// console.log(decoding)

const imgFile = document.getElementById('imgFile');

imgFile.addEventListener('change', e => {
    const file = imgFile.files[0];
    const reader = new FileReader()
    reader.addEventListener('load', e => {
        console.log(reader.result)
    })
    reader.readAsDataURL(file)
});

