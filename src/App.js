import './App.css';
import { sortedWeapons } from "./zombs";
import React, { useState, useEffect } from "react";
import { Dialog, DialogActions, Button, DialogContent } from '@mui/material';

function App() {
  let storedList = JSON.parse(localStorage.getItem("weaponList"));
  const [userWeapons, setUserWeapons] = useState(storedList !== null ? storedList : sortedWeapons);
  const [weaponList, setWeaponList] = useState([]);
  const [reRender, setRerender] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    setWeaponList(getList());
  }, [reRender]);

  const getBorderColor = (type) => {
    switch (type) {
      case "AR":
        return "red";
      case "SMG":
        return "green";
      case "LMG":
        return "yellow";
      case "Shotgun":
        return "gray";
      case "Marksman":
        return "blue";
      case "Sniper":
        return "orange";
      case "Pistol":
        return "purple";
      case "Launcher":
        return "pink";
      case "Melee":
        return "cyan";
      case "Special":
        return "magenta";
      default:
        return null;
    }
  }

  const getList = () => {
    let list = userWeapons.map((weapon) => {
      let challenges = weapon.challenges.map(challenge => {
        return (
          <div className="challengeBox" key={challenge.name}>
            <div><b>{challenge.name}</b>: {challenge.challenge}</div>
            <Button className="doneBtn" onClick={() => {
              removeChallenge(weapon, challenge);
              setRerender(!reRender);
            }}>DONE</Button>
          </div>
        )
      })
      return (
        <div
          className="weaponBox"
          style={{borderColor: getBorderColor(weapon.type), backgroundColor: weapon.challenges.length > 0 ? "" : getBorderColor(weapon.type)}}
          key={weapon.id}
        >
          <div className="weaponName">{weapon.name} --- {weapon.type}</div>
          <div className="weaponChallenges">{challenges}</div>
          <Button className="weaponReset" onClick={() => {
            resetWeapon(weapon);
            setRerender(!reRender)
          }}>RESET</Button>
        </div>
      )
    });

    let separatedList = [];
    for (let i = 0; i < list.length; i++) {
      if (i > 0 && list[i].props.style.borderColor !== list[i-1].props.style.borderColor) {
        separatedList.push(<div className="divider"></div>)
      }
      separatedList.push(list[i]);
    }

    return separatedList;
  }

  const removeChallenge = (weapon, challenge) => {
    let filteredWeapons = userWeapons;
    filteredWeapons.forEach(gun => {
      if (gun.name === weapon.name) {
        gun.challenges = gun.challenges.filter(w => {
          return w.name !== challenge.name;
        })
      }
    });
    setUserWeapons(filteredWeapons);
    localStorage.setItem("weaponList", JSON.stringify(filteredWeapons));
  }

  const resetWeapon = (weapon) => {
    let defaultWeapon;
    sortedWeapons.forEach(gun => {
      if (gun.name === weapon.name) {
        defaultWeapon = gun;
      }
    });
    let resetList = userWeapons
    resetList.forEach(gun => {
      if (gun.name === weapon.name) {
        gun.challenges = defaultWeapon.challenges;
      }
    });
    setUserWeapons(resetList);
    localStorage.setItem("weaponList", JSON.stringify(resetList));
  }

  const resetAll = () => {
    window.location.reload();
    setUserWeapons(sortedWeapons);
    console.log(sortedWeapons)
    localStorage.removeItem("weaponList");
    setRerender(!reRender);
  }

  return (
    <div>
      <Dialog open={confirmOpen}>
        <DialogContent>
          Are you sure you want to reset all weapon tracking?
        </DialogContent>
        <DialogActions>
          <Button onClick={resetAll}>YES</Button>
          <Button onClick={() => setConfirmOpen(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
      <div className="header">
        <h1>COD Zombies Weapon Camo Tracker</h1>
        <Button className="allReset" onClick={() => {setConfirmOpen(true);}}>RESET ALL WEAPONS</Button>
      </div>
      <div className="mainContainer">
        {weaponList}
      </div>
    </div>
  );
}

export default App;
