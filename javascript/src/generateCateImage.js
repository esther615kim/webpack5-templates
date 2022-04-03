import axios from 'axios';

function generateCateImage() {
    axios.get("https://api.thecatapi.com/v1/images/search")
        .then(res =>
            document.getElementById('catImage').src = res.data[0].url
        )
}

export default generateCateImage;