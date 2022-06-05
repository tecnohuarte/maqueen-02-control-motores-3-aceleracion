let velocidad = 0
for (let index = 0; index < 25; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    basic.pause(200)
    velocidad += 10
}
for (let index = 0; index < 25; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    basic.pause(200)
    velocidad += -10
}
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
