import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Tab from '../components/Tab';
import Modal from '../components/Modal';

const Tournament = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [start, setStart] = useState(false);
  const [active, setActive] = useState(false);
  const [showOrigin, setShowOrigin] = useState(false);
  const [showChronicles, setShowChronicles] = useState(false);

  // let charImage = new Array("images/lion. jpg", "images/tiger. jpg", "images/bear. jpg");
  // let randomImage = Math. floor(Math. random() * myPix. length);
  // document.getElementById("myPicture").src = myPix[randomNum];
  const [url, setUrl] = useState('');
  // const [isLoaded, setIsLoaded] = useState(true);
  const inputImageRef = useRef(null);
  const [previewSource, setPreviewSource] = useState(url);

  const handleImageRef = () => {
    inputImageRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const characterJSON = [
    {
      num: 4,
      name: 'sahad',
    },
    {
      num: 4,
      name: 'olga',
    },
    {
      num: 4,
      name: 'quina',
    },
    {
      num: 4,
      name: 'ricotta',
    },
    {
      num: 4,
      name: 'reja',
    },
    {
      num: 4,
      name: 'sarai',
    },
    {
      num: 4,
      name: 'rastell',
    },
    {
      num: 4,
      name: 'silvia',
    },
    {
      num: 4,
      name: 'shoebill',
    },
    {
      num: 5,
      name: 'sister_nia',
    },
    {
      num: 5,
      name: 'thanatos',
    },
    {
      num: 5,
      name: 'sir_carlan',
    },
    {
      num: 5,
      name: 'adol',
    },
    {
      num: 5,
      name: 'austin',
    },
    {
      num: 5,
      name: 'dana',
    },
    {
      num: 5,
      name: 'captain_barbaros',
    },
    {
      num: 5,
      name: 'dana_gratika',
    },
    {
      num: 5,
      name: 'captain_reed',
    },
    {
      num: 5,
      name: 'dana_luminous',
    },
    {
      num: 6,
      name: 'hummel',
    },
    {
      num: 6,
      name: 'euron',
    },
    {
      num: 6,
      name: 'franz',
    },
    {
      num: 6,
      name: 'dina',
    },
    {
      num: 6,
      name: 'io',
    },
    {
      num: 6,
      name: 'katthew',
    },
    {
      num: 6,
      name: 'kiergaard',
    },
    {
      num: 6,
      name: 'laxha',
    },
    {
      num: 6,
      name: 'kathleen',
    },
    {
      num: 6,
      name: 'licht',
    },
    {
      num: 6,
      name: 'little_paro',
    },
    {
      num: 6,
      name: 'master_kong',
    },
    {
      num: 7,
      name: 'miralda',
    },
  ];

  const fetchedImages = [];

  const getImages = () => {
    for (let char of characterJSON) {
      fetch(`https://res.cloudinary.com/djqrwt65l/image/upload/v163819062${char.num}/Ys%20Project/Lacrimosa/${char.name}.webp`, {
        method: 'GET',
      })
        .then((res) => {
          console.log(res.url);
          fetchedImages.push(res.url); // 렌더링이 32번 일어남...
          console.log(fetchedImages);
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(fetchedImages);

  useEffect(() => {
    setIsModal(false);
    // if (!isLoaded) {
    getImages();
    // }
  }, []);

  console.log(fetchedImages.length);
  let firstPic = Math.floor(Math.random() * fetchedImages.length);
  console.log(firstPic);
  // let secondPic = Math.floor(Math.random() * fetchedImages.length);

  // useEffect(() => {
  //   setIsModal(false);
  // }, [isModal]);

  return (
    <>
      {isModal ? (
        <Modal setIsModal={setIsModal} />
      ) : (
        <Container>
          <ImageContainer>
            {fetchedImages && (
              <>
                <FirstImage src={previewSource ? previewSource : null} onClick={handleImageRef} alt='Random1'></FirstImage>
                <MiddleText>VS.</MiddleText>
                <SecondImage src={previewSource ? previewSource : null} onClick={handleImageRef} alt='Random2'></SecondImage>
              </>
            )}
          </ImageContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem 10vw;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const ImageContainer = styled.div`
  width: 85%;
  height: 80%;
  background: #ebeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstImage = styled.img`
  width: 35%;
  height: 75%;
  background: lightyellow;
`;

const MiddleText = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 0 1.5rem;
`;

const SecondImage = styled.img`
  width: 35%;
  height: 75%;
  background: lightgreen;
`;

export default Tournament;
