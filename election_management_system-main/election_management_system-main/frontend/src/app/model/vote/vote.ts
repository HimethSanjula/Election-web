export class PartyVote {
  constructor(
    public elecId: string,
    public partyId: string,
    public userId: string
  ) {
  }
}

export class CandidateVote {
  constructor(
    public elecId: string,
    public partyId: string,
    public candidateId: string,
    public userId: string
  ) {
  }
}
