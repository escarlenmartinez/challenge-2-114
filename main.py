while True:
    if input.light_level()> 19:
        music.siren.play()
        music.set_volume(40)
    else:
        music.stop_all_sounds()
        light.clear()