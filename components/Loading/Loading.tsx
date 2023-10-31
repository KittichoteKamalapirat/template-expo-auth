import { ActivityIndicator } from "react-native";
import ScreenLayout from "../layouts/ScreenLayout";

interface Props {
  isFullScreen?: boolean;
}
const Loading = ({ isFullScreen = false }: Props) => {
  if (isFullScreen)
    return (
      <ScreenLayout>
        <ActivityIndicator size="large" />
      </ScreenLayout>
    );
  return <ActivityIndicator size="large" />;
};

export default Loading;
