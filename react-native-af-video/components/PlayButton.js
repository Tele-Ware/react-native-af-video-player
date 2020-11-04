import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import TouchableOpacity from '../../../../src/components/TouchableOpacity';

const backgroundColor = 'transparent';

const styles = StyleSheet.create({
  playButton: {
    opacity: 0.9,
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
  },
});

const PlayButton = props => (
  <View style={[styles.playContainer, !!props.controlsComponent ? { justifyContent: 'flex-end', marginBottom: 20 } : { justifyContent: 'center', flex: 1, }]}>
    <TouchableOpacity
      logEvent={{
        eventName: props.paused ? 'play_video' : 'pause_video',
        eventParams: {},
      }}
      onPress={() => props.onPress()}>
      <Icons
        style={styles.playButton}
        name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
        color={props.theme}
        size={75}
      />
    </TouchableOpacity>
  </View>
);

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

export { PlayButton };
