import MemberItem from '../member_item/MemberItem'
import "./MemberList.css"

export default function MemberList(props) {

    const members = props.members.map((member) => {
        return (
            <MemberItem key={member.uuid} messages={props.messages} member={member} handleMemberItem={props.handleMemberItem} />
        )
    })
    //Fillter
    const filter = props.members.filter(member => {
        return member.name.toLowerCase().startsWith(props.searchStr)
    }).map(member => {
        return (
            <MemberItem key={member.uuid} messages={props.messages} member={member} handleMemberItem={props.handleMemberItem} />
        )
    });

    return (
        <div className="MemberList">
            <h1>Chats</h1>
            {props.searchStr.length === 0 ? members : filter}
        </div>
    )
}