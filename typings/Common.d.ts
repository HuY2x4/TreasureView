// dva相关
type Dispatch = (action: {
  type: string;
  payload?: any;
  callback?: any;
}) => any;

interface ConnectProps extends React.Props<any> {
  dispatch?: Dispatch;
  location?: Location;
}
