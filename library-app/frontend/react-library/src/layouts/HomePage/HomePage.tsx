import { BookCarousel } from "./component/Carousel";
import { ExploreTopBook } from "./component/ExploreTopBook";
import { Heros } from "./component/Heros";
import { LibraryService } from "./component/LibraryService";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBook />
            <BookCarousel />
            <Heros />
            <LibraryService />
        </>
    );
}