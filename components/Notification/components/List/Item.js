import React, { PropTypes } from 'react';
import { Linking } from 'react-native';
import { Content, Card, CardItem, Text, Button, Icon, Badge, View, Left, Right, Body } from 'native-base';
class Item extends React.Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text style={{ paddingTop: 10 }}>{ this.props.notification.getTitle() }</Text>
                        <Text note> { this.props.notification.getCreateTime('L') } </Text>
                    </Body>
                </CardItem>
                {
                    this.props.notification.code && (
                        <CardItem style={{ paddingTop: 2 }}>
                            <Icon name="home"/>
                            <Text>
                                Phòng học: { this.props.notification.getRoom() }
                            </Text>
                        </CardItem>
                    )
                }
                {
                    this.props.notification.code && (
                        <CardItem style={{ paddingTop: 2 }}>
                            <Icon name="time"/>
                            <Text>
                                Thời gian: { this.props.notification.getStartTime('LT') } - { this.props.notification.getEndTime('LT') }
                            </Text>
                        </CardItem>
                    )
                }
                <CardItem style={{ paddingTop: 2 }}>
                    <Left>
                        {
                            this.props.notification.getSource() === 'DAA' ?
                                <Badge primary><Text>DAA</Text></Badge> :
                                this.props.notification.getSource() === 'OEP' ?
                                    <Badge info><Text>OEP</Text></Badge> :
                                    <Badge success><Text>ORTHER</Text></Badge>
                        }
                        {
                            this.props.notification.code && (
                                this.props.notification.type === 1 ?
                                    <Badge warning><Text>Học bù</Text></Badge> :
                                    this.props.notification.type === 2 ?
                                        <Badge success><Text>Nghỉ học</Text></Badge> :
                                        <Badge dark><Text>Chuyển phòng</Text></Badge>
                            )
                        }
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Button rounded small onPress={ () => Linking.openURL(this.props.notification.getLink()) } success>
                            <Icon name="exit"/>
                            <Text>Xem</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}
Item.propTypes = {
    notification: PropTypes.object.isRequired
};
export default Item;