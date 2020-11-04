import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Platform,
  StyleSheet,
  Slider as RNSlider
} from 'react-native'
import { Colors } from '../../../../src/Constants'
// import Slider from 'react-native-slider'
import Slider from '../../../../node_modules/react-native-slider/src/Slider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    marginHorizontal: -10
  },
  thumbStyle: {
    width: 15,
    height: 30
  },
  trackStyle: {
    borderRadius: 1
  }
})

const Scrubber = (props) => {
  const trackColor = 'rgba(255,255,255,0.5)'
  const { progress, theme, onSeek, onSeekRelease } = props
  return (
    <View style={styles.container}>
      {/* { Platform.OS === 'ios' ? */}
      <Slider
        onValueChange={val => onSeek(val)}
        onSlidingComplete={val => onSeekRelease(val)}
        value={progress === Number.POSITIVE_INFINITY ? 0 : progress}
        thumbTintColor={theme.scrubberThumb}
        thumbStyle={!props.controlsComponent ? styles.thumbStyle : { width: 15, height: 15 }}
        trackStyle={[styles.trackStyle, !props.controlsComponent ? { height: 15, borderRadius: 7 } : {}]}
        minimumTrackTintColor={!props.controlsComponent ? Colors().App.Primary : theme.scrubberBar}
        maximumTrackTintColor={!props.controlsComponent ? Colors().App.Secondary : trackColor}
        trackClickable
        style={!props.controlsComponent ? { width: '85%' } : { width: '100%' }}
      />
      {/* :
        <RNSlider
          style={styles.slider}
          onValueChange={val => onSeek(val)}
          onSlidingComplete={val => onSeekRelease(val)}
          value={progress}
          thumbTintColor={theme.scrubberThumb}
          minimumTrackTintColor={theme.scrubberBar}
          maximumTrackTintColor={trackColor}
        />
      } */}
    </View>
  )
}

Scrubber.propTypes = {
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

export { Scrubber }
