# Mario Kart simulator 🎮

## Description

### I created this project to improve my JavaScript skills with Node.js, serving as a kind of benchmark. This project is a simple and fun Mario Kart simulator.

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objective:</b>
            <p>Mario Kart is a racing game series developed and published by Nintendo. Our challenge is to create a game logic to simulate Mario Kart races, considering the rules and mechanics below.</p>
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 4</p>
            <p>Maneuverability: 3</p>
            <p>Power: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 4</p>
            <p>Power: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 5</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
    </tr>
</table>

## 🕹️ Rules and mechanics

### Players:
#### The computer needs to receive two characters to compete in the race, both are objects
  
### Tracks
- The characters will compete on a random track in each of the five rounds
- In each round, a section of the track will be defined, which can be straight, curved, or a combat section.
  - If the section is straight, the player must roll a 6-sided dice and add the speed attribute. The winner scores a point.
  - If the section is a curve, the player must roll a 6-sided dice and add the maneuverability attribute. The winner scores a point.
  - If the section is combat, the player must roll a 6-sided dice and add the power attribute. The winner scores a point.
  - No player can have negative points (values below zero)

### Winner condition
- At the end, the winner is the one who has the highest score

## Stack
- Node.js
- JavaScript
- Programming logic