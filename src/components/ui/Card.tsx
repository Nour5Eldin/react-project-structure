interface CardProps {
    title: string;
    description: string;
    image?: string;
    children?: React.ReactNode;
}
export default function Card({
    title, description, image, children, }: CardProps) {

    return (
        <div>
            {image && <img src={image} alt={title} />}
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    )
}