/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class TradeFee {
    /**
     * User ID
     */
    'userId'?: number;
    /**
     * taker fee rate
     */
    'takerFee'?: string;
    /**
     * maker fee rate
     */
    'makerFee'?: string;
    /**
     * Is GT deduction is enabled
     */
    'gtDiscount'?: boolean;
    /**
     * Taker fee rate if using GT deduction. It will be 0 if GT deduction is disabled
     */
    'gtTakerFee'?: string;
    /**
     * Maker fee rate if using GT deduction. It will be 0 if GT deduction is disabled
     */
    'gtMakerFee'?: string;
    /**
     * Loan fee rate of margin lending
     */
    'loanFee'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'userId',
            baseName: 'user_id',
            type: 'number',
        },
        {
            name: 'takerFee',
            baseName: 'taker_fee',
            type: 'string',
        },
        {
            name: 'makerFee',
            baseName: 'maker_fee',
            type: 'string',
        },
        {
            name: 'gtDiscount',
            baseName: 'gt_discount',
            type: 'boolean',
        },
        {
            name: 'gtTakerFee',
            baseName: 'gt_taker_fee',
            type: 'string',
        },
        {
            name: 'gtMakerFee',
            baseName: 'gt_maker_fee',
            type: 'string',
        },
        {
            name: 'loanFee',
            baseName: 'loan_fee',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return TradeFee.attributeTypeMap;
    }
}