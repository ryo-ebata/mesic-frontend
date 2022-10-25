import styles from './style.module.css';

export type Props = {
    image: string;
}
export const BackGroundImage: React.FC<Props> = ({image}) => {
    return (
        <>
            <img className={styles.black} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFRUXFRcVFRUVFRUXFRUXFxUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAQIDB//EACMQAQEBAQEAAQMEAwAAAAAAAAABAhESITFBUQNxgcFhkfD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4wopR6A4pMp2gOlaVqbQaxNGV9BBwahZoN8FrJY00oMeH1Vg8gjgkq+J6BDplYCNZCjBmch6hQEUWK1SBNiV2lP2AsnTidQCtT2jq8gn0eaesz7FAOosVqo6AA4YNsn5hSqgFwRc4Ln8AzPMPydgHIVEMBmqvKiwfQGg6iVUoK6eaRAZWGATwVVo4COCwzBFGOVVjOY+QVvLH6N+psBnRIrgAcRqNZUfqQGNEp2HAFh+VJ9AOM7G3UagEC6Aa9Uz4oFSrzpGVWAfo4g80BqCLhcBCukQL8jhSnaBaqusqOg1lVxnnS4ApSqqQOGk80CFFPIFWdaVnoC7fuPJwAXyKotUGWomNOdRwFVK8nrAM1SDglBFgVwgbcLydHQLi4m6P9gKlFSJoNMaOsuqzsFcK5VNC0EH0dLoATIhgnUGdK6VnQaY0qsFZ2CrDzD6OgdylfSBnU6jROoDM5SooKVeJlFgFMiwy6BSGfRwEaZ1pU6oFwF0A17/AN+DEg4BUZouSBfSTaAFOQqOgqVVqJ+VWgmnKhpkD8pvw0ydBmUjQgSXFyC5Ah0cHAXnQ9s6cBfQyi+gmxNjRGoCarokTqAqVVjPK4BcEpnwGe6iNLGcnyB8A6Aag+HwEmKmgfkvJyn0EJ40LgJh2n5MGcVCsFoKmldZrgKlCeHNAFypKg0K5Tmr9AnhWL6nWQRw4fCoF91WIWCbGe71ppj5ATS4UyOgtXCyfQJPPlpYmQEhNgBcq0cHQPVIuqyBFqqsTQTdqui4qAJQVo6BbogMBFQorgJtHBYQLhaglHQVBS+RKC4pMVAJFaWJBjV5vwjYzoFcLWThX8AXBBYMwBLVSjJWX+AVR/lWaAZUxYAX5RctaytAvJyjoBVTqFafQKQWKhcAcTWkTYCKqUcTwGhyJzVUB0rBwQBD4MmAhWAWAcq5WfTgK+hei9FrIF+pEYn3PX4GaB1WYOKoI0XV6iLAVDTKoAWjyVASkf8AABdjLWW3U6yDHis0WJ4CtQhKoCOVNvBAUnVUVgFmHRlUApB06kBacpHwFcMoABpkVwEWBRWgXR6Phc+4Iog1TwCuj0rWfwygNKD6UgFIchdFoKpVNvyKCiR6AN4fGZzYFYViqKDKwdXwWAijNOQ7kB0JPoGchRXQFKwHASfTIDHRB3/YDotT0egVKOp9KyBHqjcTb0EcV05E6Bc2neu00/cF5pylilz6gXRb/RX+yk7QVIdRo+gQVIAVDsQoDlECQXU9OaKgOCQpo7ALSKu64PQJyuJ8iUF8IegComwHAIEPqCaauCQE0TXyvwJAKVXk4Ogz2jjTSKAggHAUCtFBFXmRUibAK38lIuJ9Afs2YAem0IALPuAATRDACwS8+AAO5R5+AAXKnUAAorhgBTIAJnrWZAAtT5TAAX1loACzVgAlNAAsqoAIhgAqHIABcFz0AC80AA//2Q==" alt="" />
            <img className={styles.back} src={image} alt="" />
        </>
 )
}