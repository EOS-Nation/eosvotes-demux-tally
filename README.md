# EOSVotes Demux Tally

[![Build Status](https://travis-ci.org/EOS-Nation/eosvotes-demux-tally.svg?branch=master)](https://travis-ci.org/EOS-Nation/eosvotes-demux-tally)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/EOS-Nation/eosvotes-demux-tally/master/LICENSE)

EOS Votes tally based on DemuxJS, quickly retrieve all proposals and total votes tally on [`eosforumdapp`](https://github.com/eoscanada/eosio.forum).

## EOS Constitution

### [Article XI - Amending](https://github.com/EOS-Mainnet/governance/blob/master/eosio.system/eosio.system-clause-constitution-rc.md#article-xi---amending)

This Constitution and its subordinate documents shall not be amended except by a vote of the token holders with no less than 15% vote participation among tokens and no fewer than 10% more Yes than No votes, sustained for 30 continuous days within a 120 day period.

## Install

```bash
$ git clone https://github.com/EOS-Nation/eosvotes-demux-tally.git
$ cd eosvotes-demux-tally
$ npm install
```

## Quickstart

```bash
$ npm start
```

## Full API

- [https://api.eosvotes.io](https://api.eosvotes.io)
- [https://api.eosvotes.io/proposals](https://api.eosvotes.io/proposals)
- [https://api.eosvotes.io/voters](https://api.eosvotes.io/voters)
- [https://api.eosvotes.io/global](https://api.eosvotes.io/global)

## Scoped API

- [https://api.eosvotes.io/proposal/{proposer}](https://api.eosvotes.io/proposal/eostribeprod)
- [https://api.eosvotes.io/proposal/{proposer}/{proposal_name}](https://api.eosvotes.io/proposal/eostribeprod/bpminpayment)
- [https://api.eosvotes.io/voter/{voter}](https://api.eosvotes.io/voter/eostribeprod)

## LevelDB

Quickly setup your local LevelDB cache by downloading from the [`eosvotes.io` S3 bucket](https://s3.amazonaws.com/eosvotes.io/mydb.tar.gz).

```
$ cd eosvotes-demux-tally
$ wget https://s3.amazonaws.com/eosvotes.io/mydb.tar.gz
$ tar -zxvf mydb.tar.gz
```