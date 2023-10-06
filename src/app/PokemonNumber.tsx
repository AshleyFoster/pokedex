const PokemonNumber = ({ num }: { num: number }) => {
    let formattedNumber: string;

    if (num < 10) {
        formattedNumber = `00${num}`;
    } else if (num < 100) {
        formattedNumber = `0${num}`;
    } else {
        formattedNumber = `${num}`;
    }

    return (
        <div>
            {formattedNumber}
        </div>
    );
}

export default PokemonNumber;
