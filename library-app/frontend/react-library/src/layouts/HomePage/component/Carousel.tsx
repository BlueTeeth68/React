import Carousel from 'react-bootstrap/Carousel';

export const BookCarousel: React.FC<{
}> = () => {

    return (
        <div className="container container-carousel" id="top-book">
            <div className="homepage-carousel-title mb-3">
                <h3>Find Your Best Book</h3>
            </div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../Images/BooksImages/21_Bai_Hoc_Cho_The_Ky_21.jpg')}
                        alt="21 Bài Học Cho Thế Kỷ 21"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../Images/BooksImages/Nghĩ Giàu Và Làm Giàu.jpg')}
                        alt="Nghĩ Giàu Và Làm Giàu"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../Images/BooksImages/Sapiens Lược Sử Loài Người.jpg')}
                        alt="Sapiens Lược Sử Loài Người"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../Images/BooksImages/Súng Vi Trùng và Thép.jpg')}
                        alt="Súng Vi Trùng và Thép"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="homepage-carousel-title mt-3 mb-5">
                <a href="#hero" className="btn btn-primary btn-lg">View More</a>
            </div>
        </div>
    );
}

// export const CarouselImage: React.FC<{
//     carouselItem: CarouselItem
// }> = (props) => {
//     const item: CarouselItem = props.carouselItem;
//     { console.log(item.url) }
//     return (
//         <Carousel.Item>
//             <img
//                 className="d-block w-100"
//                 src={item.getImage()}
//                 alt={item.title}
//             />
//         </Carousel.Item>
//     );
// }
