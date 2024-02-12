import PropTypes from "prop-types";
import { BiStar, BiSolidStar } from "react-icons/bi";

export default function Coffee({
	name,
	image,
	price,
	rating,
	votes,
	popular,
	available,
}) {
	return (
		<div className="coffee">
			<img src={image} alt={name} />
			{popular ? <p className="popular-tag">Popular</p> : ""}
			<p className="principal-info">
				{name} <span className="price">{price}</span>
			</p>
			<div className="secondary-info">
				{rating === null ? (
					<p className="votes">
						<BiStar /> No ratings
					</p>
				) : (
					<p>
						<BiSolidStar /> {rating} <span className="votes">{votes}</span>
					</p>
				)}
				{available === false ? <p className="available">Sold Out</p> : ""}
			</div>
		</div>
	);
}

Coffee.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	rating: PropTypes.number,
	votes: PropTypes.number,
	popular: PropTypes.bool,
	available: PropTypes.bool,
};
