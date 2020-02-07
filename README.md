# Loot Crate Editor

Ark Survival Evolved Loot Crate Editor [Online](https://googee.github.io/Loot/dist)

## Feature

- Custom Beacon
- Custom Creature's Loot
- Disable Loot Crates
- Replace Creature
- Change Harvest Rate
- Save and Load data

## Guide

- Only include Loot Crates you want to change.
- To disable a Loot Crate, include it and leave its ItemSet list empty.
- Disable a creature's crate, then killing that creature won't give you crap any more.
- If you want to change a creature's crate, make sure it has at least 2 ItemSet, otherwise, it won't work.
- To copy the content of other Loot Crate, just click the "From" button and select it.
- After changing the ItemSet, click the "Update" button, it will automatically update the Loot Crates.

## Game.ini location

For single player maps go to: "Steam\SteamApps\common\ARK\ShooterGame\Saved\Config\WindowsNoEditor\Game.ini"

For servers go to: "Steam\SteamApps\common\ARK\ShooterGame\Saved\Config\WindowsServer\Game.ini"

[More Configuration](https://ark.gamepedia.com/Server_Configuration)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
