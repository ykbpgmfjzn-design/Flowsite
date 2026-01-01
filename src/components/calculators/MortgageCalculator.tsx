"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Building2 } from "lucide-react"

export function MortgageCalculator() {
    const [loanAmount, setLoanAmount] = useState(300000)
    const [interestRate, setInterestRate] = useState(5.5)
    const [loanTerm, setLoanTerm] = useState(15) // Years
    const [monthlyPayment, setMonthlyPayment] = useState(0)

    useEffect(() => {
        // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        // P = Loan Amount
        // i = monthly interest rate (annual / 12 / 100)
        // n = total no. of payments (years * 12)

        const principal = loanAmount
        const monthlyInterest = interestRate / 100 / 12
        const numberOfPayments = loanTerm * 12

        if (interestRate === 0) {
            setMonthlyPayment(principal / numberOfPayments)
            return
        }

        const x = Math.pow(1 + monthlyInterest, numberOfPayments)
        const monthly = (principal * x * monthlyInterest) / (x - 1)

        setMonthlyPayment(monthly)
    }, [loanAmount, interestRate, loanTerm])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <Card className="p-6 md:p-8 bg-white border-none shadow-xl">
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-primary" />
                Mortgage Estimator
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Controls */}
                <div className="space-y-8">
                    {/* Loan Amount */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Amount</label>
                            <span className="text-xl font-bold font-heading">{formatCurrency(loanAmount)}</span>
                        </div>
                        <Slider
                            defaultValue={[loanAmount]}
                            max={1000000}
                            min={50000}
                            step={5000}
                            onValueChange={(val) => setLoanAmount(val[0])}
                            className="py-4"
                        />
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Interest Rate (%)</label>
                            <span className="text-xl font-bold font-heading">{interestRate}%</span>
                        </div>
                        <Slider
                            defaultValue={[interestRate]}
                            max={12}
                            min={1}
                            step={0.1}
                            onValueChange={(val) => setInterestRate(val[0])}
                            className="py-4"
                        />
                    </div>

                    {/* Loan Term */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Term (Years)</label>
                            <span className="text-xl font-bold font-heading">{loanTerm} Years</span>
                        </div>
                        <Slider
                            defaultValue={[loanTerm]}
                            max={30}
                            min={1}
                            step={1}
                            onValueChange={(val) => setLoanTerm(val[0])}
                            className="py-4"
                        />
                    </div>
                </div>

                {/* Results Grid */}
                <div className="bg-secondary rounded-xl p-8 text-white flex flex-col justify-center space-y-8">
                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Estimated Monthly Payment</p>
                        <p className="text-5xl md:text-6xl font-heading font-bold text-primary">
                            {formatCurrency(monthlyPayment)}
                        </p>
                        <p className="text-sm text-gray-400 mt-2">Principal & Interest Only</p>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Payment</p>
                            <p className="text-xl font-bold">{formatCurrency(monthlyPayment * loanTerm * 12)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Interest</p>
                            <p className="text-xl font-bold text-white">
                                {formatCurrency((monthlyPayment * loanTerm * 12) - loanAmount)}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 text-xs text-gray-400 leading-relaxed">
                        *This is an estimate only. Actual rates depend on credit score, down payment, and lender terms in Indonesia (or your home country).
                    </div>
                </div>
            </div>
        </Card>
    )
}
