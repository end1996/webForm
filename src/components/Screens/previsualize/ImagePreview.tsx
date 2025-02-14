import Card from 'react-bootstrap/Card';
import styles from '../../../ImagePreview.module.css'

function ImagePreview() {
    return (
        <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
                <Card.Img
                    className={styles.cardImg}
                    variant="top"
                    src="src/assets/arte.jpg"
                />
            </Card.Body>
        </Card>
    );
}

export default ImagePreview;