import { Link, animateScroll as scroll } from "react-scroll";

function QuoteButton() {
    return (
        <div>
            <Link>
                <button type="button" class="btn btn-outline-danger">Get A Quote</button>
            </Link>
        </div>
    );
}

export default QuoteButton;