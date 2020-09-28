---
layout: post
title: "Gnupg Cheatsheet"
categories: [Cheatsheet]
visible: false
---

-----[ GnuPG Cheatsheet ]-----

This document is intended to be a quick note about some GnuPG commands.
I hope this will be useful as writing it was for me.

DEADBEEF is used as an example key ID, note any part of the user ID can be used
as key specifier to identify a key.

The --output option can always be omitted.

Any output, keys, encrypted documents, and signatures, can be ASCII-armored by
adding the --armor option.


### GENERATE A KEYPAIR
------------------
__$ gpg --full-gen-key__


### GENERATE A REVOKE CERTIFICATE
-----------------------------
__$ gpg --output revoke.gpg --gen-revoke DEADBEEF__


### LIST KEYS ON THE KEYRING
------------------------
__$ gpg --list-keys__


### EXPORT A PUBLIC KEY
-------------------
__$ gpg --output coffee.gpg --export DEADBEEF__
__$ gpg --armor --export DEADBEEF__


### EXPORT A PRIVATE KEY
--------------------
__$ gpg --export-secret-keys DEADBEEF__


### IMPORT A KEY
------------
__$ gpg --import key.gpg__


### VALIDATE A PUBLIC KEY
---------------------
A key is validated by verifying the key's fingerprint and then signing the key,
to certify that it is a valid key, and belongs to the correct user.
Edit the key with

__$ gpg --edit-key DEADBEEF__

then you can view the fingerprint with

__$ fpr__

Now verify the fingerprint with the key owner, you must guarantee that you are
communicating with the key's true owner.
After checking the fingerprint, you may sign the key to validate it

___$ sign___

You can list the signatures on the key with

__$ check__


### DELETE A PUBLIC KEY
-------------------
__$ gpg --delete-key DEADBEEF__


### DELETE A PRIVATE KEY
--------------------
__$ gpg --delete-secret-key DEADBEEF__


### ASYMMETRIC ENCRYPTION AND DECRYPTION
------------------------------------
__$ gpg --output enc_doc.gpg --encrypt --recipient ax@crypt.coffee doc__
__$ gpg --output doc --decrypt enc_doc.gpg__


### SYMMETRIC ENCRYPTION
--------------------
With a passphrase.

__$ gpg --output doc.gpg --symmetric doc.gpg__


### SIGN A DOCUMENT
---------------
A signature is created using the private key of the signer.
Compress the doc before sign, output in binary format.

__$ gpg --sign doc__


### CLEARSIGN A DOCUMENT
--------------------
Wrapped in an ASCII-armored signature but otherwise human readable.

__$ gpg --clearsign doc__


### DETACHED SIGNATURE
------------------
Creates a detached signature, in a separate file.

__gpg [--armor] --detach-sig doc__


### EXTRACT A SIGNED DOCUMENT
-------------------------
__$ gpg --decrypt doc.sig__


###  VERIFY A SIGNED DOCUMET
-----------------------
__$ gpg --verify doc.sig__
