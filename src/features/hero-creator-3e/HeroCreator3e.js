import React from 'react'
import { HeroDetails } from './HeroDetails';
import { Abilitites } from './Abilitites';
import { Offense } from './Offense';
import { Defense } from './Defense';
import { NotesAndConditions } from './NotesAndConditions';
import { HeroProgression } from './HeroProgression';
import { PowersAndDevices } from './PowersAndDevices';
import { Skills } from './Skills';
import { Advantages } from './Advantages';
import { Complications } from './Complications';
import { EquipmentVehiclesHeadquarters } from './EquipmentVehiclesHeadquarters';
import { Information } from './Information';

export const HeroCreator3e = () => {

    return (
        <section>
            <h1>Hero Creator 3e</h1>
            <form className="hero-creator-3e">
                <HeroDetails />
                <Abilitites />
                <Offense />
                <Defense />
                <NotesAndConditions />
                <HeroProgression />
                <PowersAndDevices />
                <Skills />
                <Advantages />
                <Complications />
                <EquipmentVehiclesHeadquarters />
                <Information />
            </form>
        </section>
    );
}
