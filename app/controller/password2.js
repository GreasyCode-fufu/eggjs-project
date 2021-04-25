const crypto = require('crypto');

class PasswordHelper {

    constructor(digest = 'sha512', keyLength = 64, saltLength = 16, iterations = 10000) {
        this.digest = digest;
        this.keyLength = keyLength;
        this.saltLength = saltLength;
        this.iterations = iterations;
    }


    async verify(password, hashedPassword) {
        let result = await hashedPassword.split('&');
        let salt = result[1];
        let iterations = parseInt(result[2]);
        let keyLength = parseInt(result[3]);
        let digest = result[4];
        let hash = result[5];

        let derivedKey = await this.derive(password, salt, iterations, keyLength, digest);

        if (hash.length === derivedKey.length && hash === derivedKey) {
            return true;
        } else {
            return false;
        }

    }

    async hash(password) {
        let salt = await this.generateSalt(this.saltLength);
        let derivedKey = await this.derive(password, salt, this.iterations, this.keyLength, this.digest);
        let result = [
            'PBKDF2',
            salt,
            this.iterations,
            this.keyLength,
            this.digest,
            derivedKey
        ].join('&');
        // join方法用于把数组中所有元素放入一个字符串中；如果省略separator，则使用逗号作为分隔符；
        return result;

    }

    derive(password, salt, iterations, keyLength, digest) {
        return new Promise((resolve, reject) => {
            crypto.pbkdf2(
                password,
                salt,
                iterations,
                keyLength,
                digest,
                (error, derivedKey) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(derivedKey.toString('hex'));
                    }
                }
            );
        });
    };



    generateSalt(saltLength) {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(saltLength, (error, buffer) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(buffer.toString('hex'));
                }

            });

        });

    }
}

module.exports = PasswordHelper;