while (true) {
    if (input.lightLevel() > 19) {
        music.siren.play()
        music.setVolume(40)
    } else {
        music.stopAllSounds()
        light.clear()
    }
    
}
