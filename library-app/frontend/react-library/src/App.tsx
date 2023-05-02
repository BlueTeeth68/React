import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import { NavLinkComponent } from './component/NavLinkComponent';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';

export const App = () => {
  const navLinkContent: NavLinkComponent[] = [];
  navLinkContent.push(new NavLinkComponent(true, "Home"));
  navLinkContent.push(new NavLinkComponent(false, "Search Books"));

  // const carouselItems: CarouselItem[] = [];
  // carouselItems.push(new CarouselItem(
  //   "/Images/BooksImages/21_Bai_Hoc_Cho_The_Ky_21.jpg",
  //   "21 Bài Học Cho Thế Kỷ 21")
  // );
  // carouselItems.push(new CarouselItem(
  //   "/Images/BooksImages/Nghĩ Giàu Và Làm Giàu.jpg",
  //   "Nghĩ Giàu Và Làm Giàu")
  // );
  // carouselItems.push(new CarouselItem(
  //   "/Images/BooksImages/Sapiens Lược Sử Loài Người.jpg",
  //   "Sapiens Lược Sử Loài Người.jpg")
  // );
  // carouselItems.push(new CarouselItem(
  //   "/Images/BooksImages/Súng Vi Trùng và Thép.jpg",
  //   "Súng Vi Trùng và Thép")
  // );

  return (
    <section>
      <Navbar buttonContent='Sign In' navLinkContent={navLinkContent} />
      <HomePage />
      <Footer />
    </section>
  );
}

export default App;
