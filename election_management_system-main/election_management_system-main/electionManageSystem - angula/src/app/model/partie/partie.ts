export class Partie {
  constructor(
    public election_id: string,
    public party_name: string,
    public party_description: string,
    public party_banner: string,
    public party_icon: string,
    public party_color: string,
  ) {
  }
}

export class getPartyElectionBy {
  constructor(
    public election_id: string
  ) {
  }
}
