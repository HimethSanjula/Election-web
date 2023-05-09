export class Candidate {
  constructor(
    public candidate_name: string,
    public party_id: string,
    public candidate_image: string,
    public candidate_number: string,
    public candidate_description: string
  ) {
  }
}

export class getCandidatesByParty {
  constructor(
    public party_id: string
  ) {
  }
}
