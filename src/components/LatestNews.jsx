import MarqueeImport from "react-fast-marquee";
import { Link } from "react-router-dom";



const Marquee = MarqueeImport.default || MarqueeImport;


const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-base-300 p-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>

            <Marquee  className='space-x-10' pauseOnHover={true} speed={70}>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, accusantium?
                </Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, accusantium?
                </Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, accusantium?
                </Link>
            </Marquee>

        </div>
    );
};

export default LatestNews; 