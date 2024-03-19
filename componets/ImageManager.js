import * as ImagePicker from 'expo-image-picker';

const takeImageHandler = async () => {
  try {
    const result = await ImagePicker.launchCameraAsync ({allowsEditing: true});
  } catch (err) {
    console.log (err);
  }
};

const [status, requestPermission] = ImagePicker.useCameraPermissions();

function verifyPermission