import axios from 'axios';
import generateCateImage from './generateCateImage';
import svgIcon from './assets/svgIcon.svg';
import './styles/main.scss';

const svgImage = document.getElementById('svgImage');
svgImage.src = svgIcon;


console.log(generateCateImage());