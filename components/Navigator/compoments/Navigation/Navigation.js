import React  from "react";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,
    Button,
    View
} from "native-base";
import Styles from '../../Style';

export default class extends React.Component {
    render() {
        let itemStyles = {
            'Dashboard': Styles.inactiveItem,
            'Notification': Styles.inactiveItem,
            'Course': Styles.inactiveItem,
            'User': Styles.inactiveItem
        };
        //Thay đổi styles của menu đang active.
        itemStyles[this.props.activeItemKey] = Styles.activeItem;

        return (
            <Container>
                <Content bounces={ false } style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                    <View style={ itemStyles.Dashboard.backgroundColor }>
                        <ListItem button noBorder onPress={() => this.props.navigation.navigate("Dashboard")}>
                            <Left>
                                <Icon active name="apps" style={{ color: "#777", fontSize: 26, width: 20 }} />
                                <Text style={ itemStyles.Dashboard.textColor }>
                                    Dashboard
                                </Text>
                            </Left>
                        </ListItem>
                    </View>
                    <View style={ itemStyles.Notification.backgroundColor }>
                        <ListItem button noBorder onPress={() => this.props.navigation.navigate("Notification")}>
                            <Left>
                                <Icon active name="text" style={{ color: "#777", fontSize: 26, width: 20 }} />
                                <Text style={ itemStyles.Notification.textColor }>
                                    Thông báo
                                </Text>
                            </Left>
                        </ListItem>
                    </View>
                    <View style={ itemStyles.Course.backgroundColor }>
                        <ListItem button noBorder onPress={() => this.props.navigation.navigate("Course")}>
                            <Left>
                                <Icon active name="calculator" style={{ color: "#777", fontSize: 26, width: 20 }} />
                                <Text style={{ ...Styles.textWithBadge, ...itemStyles.Course.textColor }}>
                                    Môn học
                                </Text>
                                <Badge success><Text>{ this.props.numberOfCourses }</Text></Badge>
                            </Left>
                        </ListItem>
                    </View>
                    <View style={ itemStyles.User.backgroundColor }>
                        <ListItem button noBorder onPress={() => this.props.navigation.navigate("User")}>
                            <Left>
                                <Icon active name="contact" style={{ color: "#777", fontSize: 26, width: 20 }} />
                                <Text style={ itemStyles.User.textColor }>
                                    Tài khoản
                                </Text>
                            </Left>
                        </ListItem>
                    </View>
                </Content>
            </Container>
        );
    }
}