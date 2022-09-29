import { Container, ListItem, List, Title } from "./styled";

const ListTile = ({ title, items }) => (
    <Container>
        <Title>{title}</Title>
        <List>
            {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
            ))}
        </List>
    </Container>
);

export default ListTile;