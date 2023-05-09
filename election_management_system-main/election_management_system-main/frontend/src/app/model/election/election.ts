export class Election {

  election_name!: string;
  location!: string;
  date!: string;
  start_time!: string;
  end_time!: string;
  description!: string;
  image_name!: string;


  constructor(election_name: string, location: string, date: string, start_time: string, end_time: string, description: string, image_name: string) {
    this.election_name = election_name;
    this.location = location;
    this.date = date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.description = description;
    this.image_name = image_name;
  }
}

export class getStartElection {
  constructor(
    public is_started: boolean
  ) {
  }
}

export class getStartElectionId {
  constructor(
    public  _id: string
  ) {
  }
}

export class electionId {
  constructor(
    public electionId: string,
  ) {
  }
}

export class getCandiVote {
  constructor(
    public electionId: string,
    public partyId: string,
  ) {
  }
}
