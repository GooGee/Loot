# Loot Crate Editor

Ark Survival Evolved Loot Crate Editor [Online](https://googee.github.io/Loot/dist)

## Feature

- Customize Beacon
- Customize Creature's Loot
- Disable Loot Crates
- Replace Creature
- Change Harvest Rate
- Save and Load

## Guide

- Only include Loot Crates you want to change.
- To disable a Loot Crate, include it and leave its ItemSet list empty.
- Disable a creature's loot, then killing that creature won't give you crap any more.
- To change a creature's loot, make sure it has at least 2 ItemSet.
- After changing the ItemSet, click the "Update" button to update the Loot Crates.
- To copy the content of other Loot Crate, just click the "Load" button and select it.

## Game.ini location

For single player go to:

"Steam\SteamApps\common\ARK\ShooterGame\Saved\Config\WindowsNoEditor\Game.ini"

For servers go to:

"Steam\SteamApps\common\ARK\ShooterGame\Saved\Config\WindowsServer\Game.ini"

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
