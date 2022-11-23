import React from 'react';
import { Carousel } from 'react-carousel-minimal';






const Carousels = () => {
    const data = [
        {
            image: "https://img.freepik.com/free-photo/social-media-audience-crowd-filming-through-smartphones_53876-128944.jpg?w=740&t=st=1669234206~exp=1669234806~hmac=0578986b7637791bac9107f50b36d74b2358276e2ed7ce993f775f9e8a65a778",

        },
        {
            image: "https://img.freepik.com/free-photo/shot-two-young-black-females-looking-phone-together-feeling-excited-surprised_181624-46504.jpg?w=740&t=st=1669234230~exp=1669234830~hmac=9260e107290c6a1d21e7d9cb656be97f56b958c0de2950f82a16b5bdd5438f23",

        },
        {
            image: "https://img.freepik.com/free-photo/horizontal-shot-pleasant-looking-black-adult-excited-with-video-chat-carries-up-date-cell-phone-has-broad-smile_273609-18434.jpg?w=740&t=st=1669234333~exp=1669234933~hmac=269c5d519cc84acb70f25bd1e339a1039ebaebdb219713ac2939b09fb44c1e77",

        },
        {
            image: "https://img.freepik.com/free-photo/positive-emotions-close-up-young-good-looking-dark-skinned-male-with-afro-hairstyle-white-t-shirt-red-shirt-smiling-with-teeth-chatting-with-friend-smartphone_176420-13009.jpg?w=740&t=st=1669234367~exp=1669234967~hmac=30716162a5fe969d3ef5e283cd94ed71e15058e7c9fafeb2ce4ea2da6318d88f",

        },
        {
            image: "https://img.freepik.com/free-photo/happy-asian-girl-passing-by-friend-waving-them-street-saying-hello-while-walking-city-h_1258-120834.jpg?w=740&t=st=1669234321~exp=1669234921~hmac=60588ca32bdf2ddd436326d9fadf86915c9cb4ce62fa447487d5b77b0d965c99",

        },


    ];
    console.log(data);
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (

        <div style={{ textAlign: "center" }}>

            <div style={{
                padding: "0 20px"
            }}>
                <Carousel
                    data={data}
                    time={4000}
                    width="auto"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "auto",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                />
            </div>
        </div>

    );
};

export default Carousels;