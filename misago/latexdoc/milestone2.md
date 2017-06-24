---
author:
- Wong Ding Feng
- Derrick Chua
title: 'PYP.AI'
---

Level of Achievement
====================

Gemini

Project Scope
=============

A portal for crowdsourced Past Year Paper solutions

Problem Motivation
==================

We realised the lack of past year paper solutions for some courses in
NUS. When we come up with some solutions for past year papers, it would
be nice to be able to check against other people’s solutions.

Detailed description
====================

Method to sieve out correct answer
----------------------------------

We need real data to know how each method would work out, currently
still experimenting. These are a few that we had come up with.

### Reddit style of upvote

Upvotes pull it up.Add some time based weight to pull it down. This is
to allow for possibly newer better answers.

### Similarity comparison through NLTK

Great minds think alike, thats the idea behind this. Using python NLTK
or other machine learning methods, possibly doing word count to find
similarity in sentences. Then this could possibly be a correct answer.

Rebuttal methods
----------------

There are some questions that trick the majority into getting the wrong
answer, to allow for the few to submit meaningful corrections to the
majority’s answer.

Tagging and Indexing
--------------------

Information is useful becaused it is indexed, try to create some auto
indexing algorithms.

Technologies and tools
======================

-   Backend

    -   Node.js

        -   Passport.js

    -   Express

    -   NLTK

-   Frontend

    -   React

Development Plan
================

  Parse past year papers using OCR (otherwise manual)   June week 1
  ----------------------------------------------------- -----------------
  Create forum                                          June week 2
  Sieve our answer                                      June week 3 & 4
  Crypto-currency                                       July
