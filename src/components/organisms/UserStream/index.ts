import { connect } from 'react-redux'
import { selectors } from '../../../state/modules/user'
import { RootState } from '../../../state'
import { UserStream } from './UserStream'

const mapStateToProps = (state: RootState) => ({
  userList: selectors.getList(state)
})

export default connect(mapStateToProps)(UserStream)
