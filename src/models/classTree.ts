import {ObjectId} from "mongodb";

export class ClassTreeNode {
    name: string
    description: string
    skills: Skill[]
    parents: ClassTreeNode[]
    id?: ObjectId

    get displayName(): string {
        return `<${this.name}>`
    }

    constructor(name: string, description: string, skills: Skill[], parents: ClassTreeNode[], id?: ObjectId) {
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.parents = parents;
        this.id = id;
    }
}

export class Class extends ClassTreeNode {
    advancesTo: Class[]
    advancesFrom: Class[]
    xpSourceDescription: string
    aliases: string[]

    get displayName(): string {
        return `[${this.name}]`
    }

    constructor(name: string, description: string, skills: Skill[], parents: ClassTreeNode[], id: ObjectId, advancesTo: Class[], advancesFrom: Class[], xpSourceDescription: string, aliases: string[]) {
        super(name, description, skills, parents, id);
        this.advancesTo = advancesTo;
        this.advancesFrom = advancesFrom;
        this.xpSourceDescription = xpSourceDescription;
        this.aliases = aliases;
    }
}

export class Skill {
    name: string
    description: string
    prerequisites: string
    isActive: boolean
    cooldown: string | number // if number then is cooldown in ticks
    spCost: number
    aliases: string[]

    get displayName(): string {
        return `[${this.name}]`
    }

    constructor(name: string, description: string, prerequisites: string, isActive: boolean, cooldown: string | number, spCost: number, aliases: string[]) {
        this.name = name;
        this.description = description;
        this.prerequisites = prerequisites;
        this.isActive = isActive;
        this.cooldown = cooldown;
        this.spCost = spCost;
        this.aliases = aliases;
    }
}