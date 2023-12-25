import { DBUserType, UserType } from "../componenets/Feed/Wall/Wall";

export const parseUser: (user: DBUserType) => (UserType & { DB: DBUserType }) = (props) => ({
    DB: props,
    id: props.USER_ID,
    username: props.USERNAME,
    channel_id: props.CHANNEL_ID,
    canSeeOtherEmployees: props.CAN_SEE_OTHER_EMPLOYEES === 'Y',
    role: props.USER_ROLE,
    roleId: props.PERMISSION_ROLE_ID,
    departmentId: props.DEP_ID,
    mgrReadOnly: props.MGR_READ_ONLY === "Y",
    chartId: props.CHART_ID,
    salaryVisible: props.SALARY_VISIBLE === 'Y',
    dataVisible: props.DATA_VISIBLE === 'Y',
})


export const parseUsers: (users: DBUserType[]) => (UserType & { DB: DBUserType })[] = (users) => (
    users.map(parseUser)
)